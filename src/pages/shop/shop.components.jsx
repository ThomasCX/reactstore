import React from 'react';
import {Route} from "react-router-dom";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collection.component';

import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import withSpinner from '../../components/with-spinner/with-spinner.components'

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }

    render() {
        const {match, isCollectionFetchingFetching} = this.props;
        return (
            <div className='shop-page'>
                <Route
                    exact
                    path={`${match.path}`}
                    render={props => (
                        <CollectionsOverviewWithSpinner isLoading={isCollectionFetchingFetching}
                                                        {...props} />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={props => (
                        <CollectionPageWithSpinner isLoading={isCollectionFetchingFetching} {...props}
                        />
                    )}
                />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetchingFetching: selectIsCollectionFetching,
});
const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(mapStateToProps,
    mapDispatchToProps)(ShopPage);
