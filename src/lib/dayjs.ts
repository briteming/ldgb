// Imported on _app.page.tsx to be globally available
import dayjs from 'dayjs'
import 'dayjs/locale/en-gb'
import relativeTime from 'dayjs/plugin/relativeTime'

// Set dayjs locale
dayjs.locale('en-gb')

// Extend relative time
dayjs.extend(relativeTime)
