'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _extends3 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
)

var _classnames = _interopRequireDefault(require('classnames'))

var _react = _interopRequireDefault(require('react'))

var _NoopWrapper = _interopRequireDefault(require('../lib/NoopWrapper'))

/* eslint-disable react/prop-types */
function TimeGridEvent(props, ref) {
  var _extends2

  var style = props.style,
    className = props.className,
    event = props.event,
    accessors = props.accessors,
    rtl = props.rtl,
    selected = props.selected,
    label = props.label,
    continuesEarlier = props.continuesEarlier,
    continuesLater = props.continuesLater,
    getters = props.getters,
    onClick = props.onClick,
    onDoubleClick = props.onDoubleClick,
    _props$components = props.components,
    Event = _props$components.event,
    EventWrapper = _props$components.eventWrapper,
    _props$components$eve = _props$components.eventInnerWrapper,
    EventInnerWrapper =
      _props$components$eve === void 0
        ? _NoopWrapper.default
        : _props$components$eve
  var title = accessors.title(event)
  var tooltip = accessors.tooltip(event)
  var end = accessors.end(event)
  var start = accessors.start(event)
  var userProps = getters.eventProp(event, start, end, selected)
  var height = style.height,
    top = style.top,
    width = style.width,
    xOffset = style.xOffset,
    left = style.left,
    marginLeft = style.marginLeft
  var inner = [
    _react.default.createElement(
      'div',
      {
        key: '1',
        className: 'rbc-event-label',
      },
      label
    ),
    _react.default.createElement(
      'div',
      {
        key: '2',
        className: 'rbc-event-content',
      },
      Event
        ? _react.default.createElement(Event, {
            event: event,
            title: title,
          })
        : title
    ),
  ]
  return _react.default.createElement(
    EventWrapper,
    (0, _extends3.default)(
      {
        type: 'time',
      },
      props
    ),
    _react.default.createElement(
      EventInnerWrapper,
      {
        ref: ref,
        onClick: onClick,
        onDoubleClick: onDoubleClick,
        style: (0, _extends3.default)(
          {},
          userProps.style,
          ((_extends2 = {
            top: top + '%',
            height: 'calc(' + height + '% - 2px)',
          }),
          (_extends2[rtl ? 'right' : 'left'] = Math.max(0, xOffset) + '%'),
          (_extends2.width = '' + width),
          (_extends2.marginLeft = marginLeft + 'px'),
          (_extends2.left = left + '%'),
          _extends2)
        ),
        title: tooltip
          ? (typeof label === 'string' ? label + ': ' : '') + tooltip
          : undefined,
        className: (0, _classnames.default)(
          'rbc-event',
          className,
          userProps.className,
          {
            'rbc-selected': selected,
            'rbc-event-continues-earlier': continuesEarlier,
            'rbc-event-continues-later': continuesLater,
          }
        ),
        event: event,
      },
      inner
    )
  )
}

var _default = _react.default.forwardRef(TimeGridEvent)

exports.default = _default
module.exports = exports['default']
