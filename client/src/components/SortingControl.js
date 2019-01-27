import React from 'react'
import {connect} from 'react-redux'

import {sortby} from '../actions/sortingby'

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
})

class SortingControl extends React.PureComponent {

  state = {sortingBy: 'vote'}

  handleChange = event => {
    const {sortby} = this.props
    this.setState({ sortingBy: event.target.value });
    sortby(event.target.value)
  }

  render() {
    const {classes} = this.props
    const {sortingBy} = this.state
    return (
        <div className={classes.root}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Sort by</FormLabel>
              <RadioGroup
                aria-label="Sorting"
                name="sorting"
                className={classes.group}
                value={sortingBy}
                onChange={this.handleChange}
              >
                <FormControlLabel value="vote" control={<Radio />} label="Vote" />
                <FormControlLabel value="date" control={<Radio />} label="Date" />
              </RadioGroup>
          </FormControl>
        </div>
    )
  }
}

const mapStateToProps = ((state, {classes}) => ({
  classes
}))

const mapDispatchToProps = dispatch => ({
  sortby: way => dispatch(sortby(way))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles)(SortingControl)
)
