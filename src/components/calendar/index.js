import React, {useState, useEffect, useCallback, Fragment} from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import {useTranslation} from "react-i18next";

const Component = ({idRequest, Get, onClick, formatData}) => {
  const localizer = momentLocalizer(moment);
  const { t } = useTranslation();

  const [events, setEvents] = useState([
    {
      id: 0,
      title: "All Day Event very long title",
      a: 1,
      b: 2,
      c: 3,
      allDay: true,
      start: new Date(),
      end: new Date(),
    },
  ]);
  const handleChangeDate = useCallback(async (date) => {
    if (Get) {
      const {data} = await Get(moment(date).format('YYYY-MM'), idRequest);
      formatData && setEvents(formatData(data));
    }
  }, [Get, idRequest, formatData]);

  useEffect(() => {
    handleChangeDate(new Date());
  }, [handleChangeDate]);

  const customDayPropGetter = ({start}) => {
    return {
      className: 'event-percent',
      // style: {
      //   border: 'solid 3px ' + (start.getDate() === 7 ? '#faa' : '#afa'),
      // },
    }
  }

  // noinspection JSUnusedGlobalSymbols
  return (
    <Calendar
      eventPropGetter={customDayPropGetter}
      selectable
      localizer={localizer}
      events={events}
      defaultView={Views.MONTH}
      defaultDate={new Date()}
      style={{ height: '560px' }}
      views={{ month: true }}
      onSelectEvent={onClick}
      onNavigate={async (date) => await handleChangeDate(date)}
      popup={true}
      components={{event: (prop, a) => {
          // console.log(prop, a);
        return <div className={'flex mt-[14px]'}>
          <div className={'h-2'} style={{width: '20%', backgroundColor: '#2196F3'}}></div>
          <div className={'h-2'} style={{width: '20%', backgroundColor: '#4CAF50'}}></div>
          <div className={'h-2'} style={{width: '20%', backgroundColor: '#EAB308'}}></div>
          <div className={'h-2'} style={{width: '20%', backgroundColor: '#D22F23'}}></div>
          <div className={'h-2'} style={{width: '20%', backgroundColor: '#9E9E9E'}}></div>
        </div>
        }}}
      messages={{ showMore: (total) => "+" + total + " " + t('components.calendar.more')}}
    />
  );
};
export default Component;
