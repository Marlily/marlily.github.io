
import Header from './Header/Header';
import MainItem from './Input/MainItem';
import List from './List/List';
import ListActions from './List/ListActions';

const Wrapper = () => {


    return (
        <section className="wrapper">
            <Header />
            <MainItem />
            <List />
            <ListActions />
        </section>
    )
}

export default Wrapper;