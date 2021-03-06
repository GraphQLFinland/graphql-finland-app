import { put, call } from 'redux-saga/effects'
import gql from 'graphql-tag'

import ScheduleActions from '../Redux/ScheduleRedux'

const getSchedules = {
  query: gql`
  {
  conference(id: "graphql-finland-2018") {
    schedules {
    day,
       intervals {
         begin
         end
         sessions {
           title
           description
           type
           ... on Workshop {
              speakers {
                name
                image {
                  url
                }
              }
            }
            ... on Talk {
              speakers {
                name
                image {
                  url
                }
              }
            }
           location {
             name,
             city,
             address
           }
         }
       }
     }
  }
}`
}

// process STARTUP actions
export function * updateSchedule (client, action) {
  yield put(ScheduleActions.scheduleRequest())
  try {
    const { data: {conference: { schedules } } } = yield call(client.query, getSchedules)
    yield put(ScheduleActions.scheduleSuccess(schedules))
  } catch (err) {
    yield put(ScheduleActions.scheduleFailure())
  }
}
