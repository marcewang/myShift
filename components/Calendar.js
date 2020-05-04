import React from 'react';
import { CalendarList } from 'react-native-calendars';
import { getDShift } from '../utilities/getShifts';
import { Container } from 'native-base';
import Fab from './Fab';


const markedDates = getDShift()

const CalendarListView =
    <CalendarList
        pastScrollRange={12}
        futureScrollRange={15}
        scrollEnabled={true}
        showScrollIndicator={true}
        markedDates={markedDates}
        markingType={'period'}
        theme={{
            todayTextColor: 'red',
        }}
    />


const Calendar = (props) => {    
    return (
        <Container>
            <Fab baseElement={CalendarListView} navigation={props.navigation} />
        </Container>
    );
}

export default Calendar