// eslint-disable-next-line filenames/match-exported
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { toggleDrawing } from '../actions/app'

const id = 'drawing'

const CheckboxDrawing = ({ onChange, value }) => (
  <div>
    <input
      id={id}
      type='checkbox'
      onChange={onChange}
      value={value}
    />

    &nbsp;

    <label
      htmlFor={id}
    >
      Drawing Layer Example
    </label>
  </div>
)

CheckboxDrawing.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  value: state.getIn(['app', 'drawing'])
})

const mapDispatchToProps = dispatch => ({
  onChange: ({ target: { checked } }) => {
    dispatch(
      toggleDrawing({
        drawing: checked
      })
    )
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckboxDrawing)
