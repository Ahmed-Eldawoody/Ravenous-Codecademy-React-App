import React from 'react';
import './SearchBar.css';




class SearchBar extends React.Component {
    // we made a initial state for this class component -- part:3
    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        /* since the two new methods use this we will bind 'this' */
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        //we moved this object inside and make it member variable -- part:3
        this.sortByOption = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    };

    /* Adding a new method -- part:3
    change the color of list item and
     the bottom border onClick */
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    };

    //Adding another method "sets the state of a sorting option" -- part:3
    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        });
    };

    // Adding two new methods 
    /* first one: change the initial state of term
     with the input of the first search bar -- part:3*/
    handleTermChange(event) {
        this.setState(
            {
                term: event.target.value
            }
        );
    };

    /* seconde one: change the initial state of
     location with the input of the seconde search bar -- part:3*/
    handleLocationChange(event) {
        this.setState(
            {
                location: event.target.value
            }
        );
    };

    // add handleEvent method -- part:3
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
         /* to prevent the default
          action of clicking a linkfrom triggering at
           the end of the method. */
    };


    renderSortByOption() {
        // we use 'this' to refere to the previouse object line 27 & 28 -- part:3
        return Object.keys(this.sortByOption).map(sortByOption => {
            let sortByOptionValue = this.sortByOption[sortByOption];
            // Added a classeName to the return -- part:3
            return (
                <li className={this.getSortByClass(sortByOptionValue)} 
                    key={sortByOptionValue} 
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>

                    {sortByOption}
                    
                </li>
                // the onClick attribute change the sortBy initial state -- part:3
            );

        });
    };

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOption()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <input placeholder="Where?" onChange={this.handleLocationChange} />
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch} >Let's Go</a>
                </div>
            </div>

        );
    };
};

export default SearchBar;