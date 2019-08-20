import cn from 'classnames'
import React from 'react'
import NoopWrapper from '../lib/NoopWrapper'

/* eslint-disable react/prop-types */
function TimeGridEvent(props) {
  const {
    style,
    className,
    event,
    accessors,
    rtl,
    selected,
    label,
    continuesEarlier,
    continuesLater,
    getters,
    onClick,
    onDoubleClick,
    components: { event: Event, eventWrapper: EventWrapper, eventInnerWrapper: EventInnerWrapper = NoopWrapper },
  } = props
  let title = accessors.title(event)
  let tooltip = accessors.tooltip(event)
  let end = accessors.end(event)
  let start = accessors.start(event)

  let userProps = getters.eventProp(event, start, end, selected)

  let { height, top, width, xOffset, left, marginLeft } = style
  const inner = [
    <div key="1" className="rbc-event-label">
      {label}
    </div>,
    <div key="2" className="rbc-event-content">
      {Event ? <Event event={event} title={title} /> : title}
    </div>,
  ]

  return (
    <EventWrapper type="time" {...props}>
      <EventInnerWrapper
        onClick={onClick}
        onDoubleClick={onDoubleClick}
        style={{
          ...userProps.style,
          top: `${top}%`,
          height: `calc(${height}% - 2px)`,
          [rtl ? 'right' : 'left']: `${Math.max(0, xOffset)}%`,
          width: `${width}`,
          marginLeft: `${marginLeft}px`,
          left: `${left}%`,
        }}
        title={
          tooltip
            ? (typeof label === 'string' ? label + ': ' : '') + tooltip
            : undefined
        }
        className={cn('rbc-event', className, userProps.className, {
          'rbc-selected': selected,
          'rbc-event-continues-earlier': continuesEarlier,
          'rbc-event-continues-later': continuesLater,
        })}
        event={event}
      >
        {inner}
      </EventInnerWrapper>
    </EventWrapper>
  )
}

export default TimeGridEvent
