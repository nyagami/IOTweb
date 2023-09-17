import * as dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import tz from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(tz)

export const parseUTC = (time: Date | undefined | string): string => {
    return dayjs.utc(time).format("YYYY-MM-DD HH:mm:ss");
} 