import { Link } from "react-router-dom";
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';


const PostsList = () => {
    let items = {}
    let requestCache = {}

    const getUrl = (rows, start) => `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${rows}`

    const Row = ({ index, style }) => {
        const item = items[index];
        return (
            <ul style={style}>
                {item ? (
                    <li className="post">
                        <span className="post-id">{item.id}.</span>
                        <p className="post-title">{item.title}</p>
                        <div className="post-body">
                            {item.body.split('').length > 50 ? item.body.substring(0, 47) + "..." : item.body}
                        </div>
                        <Link to={`/posts/${item.id}`}>Просмотр</Link>
                    </li>
                ) : ('loading...')}

            </ul>
        )
    }

    const isItemLoaded = ({ index }) => !!items[index];

    const loadMoreItems = (visibleStartIndex, visibleStopIndex) => {
        const key = [visibleStartIndex, visibleStopIndex].join('.');
        if (requestCache[key]) {
            return;
        }
        const length = visibleStopIndex - visibleStartIndex
        const visibleRange = [...Array(length).keys()].map(
            x => x + visibleStartIndex
        )
        const itemsRetrieved = visibleRange.every(index => !!items[index])

        if (itemsRetrieved) {
            requestCache[key] = key;
            return;
        }

        return fetch(getUrl(length, visibleStartIndex))
            .then(response => response.json())
            .then(data => {
                console.log(data)
                data.forEach((item, index) => {
                    items[index + visibleStartIndex] = item
                })
            })
            .catch(error => console.error('error:', error));
    }

    return (
        <InfiniteLoader
            isItemLoaded={isItemLoaded}
            loadMoreItems={loadMoreItems}
            itemCount={100}
        >
            {({ onItemsRendered, ref }) => (
                <List
                    height={window.innerHeight}
                    itemCount={100}
                    itemSize={105}
                    width={window.innerWidth}
                    ref={ref}
                    onItemsRendered={onItemsRendered}
                >
                    {Row}
                </List>
            )}
        </InfiniteLoader>
    )
}

export default PostsList