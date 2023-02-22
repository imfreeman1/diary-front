import DatepickerComponent from './Components/DatepickerComponent/DatepickerComponent';
import WeeklyDisplay from './Components/Weekly/WeeklyDisplay'
import Button from './Components/Button'

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const days = ["Weekly", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

const Weekly = () => {
  const dateInWeekly = new Date()
  let [year, month, date] = [dateInWeekly.getFullYear(), dateInWeekly.getMonth()+1, dateInWeekly.getDate()]

  const getWeekly = () =>{
    let week = dateInWeekly.getDay()
    let calcMon = dateInWeekly.getDate() - week; 
    let nextDate = (calc) =>{
      return new Date(dateInWeekly.setDate(calc)).toISOString().substring(0, 10);
    } 
    const weeklyPlan = []
    for(let i=0; i<days.length; i++){
      let weekObj={}
      weekObj.days = days[i] 
      if(i) {
        weekObj.date = calcMon + i 
        weekObj.locdate = nextDate(calcMon + i)
      }
      weeklyPlan.push(weekObj)
    }
    return weeklyPlan
  }

  const weeklyPlan=getWeekly()

  return (
    <div className='h-screen bg-[#9DBC9D] text-center'>Weekly
        <DatepickerComponent selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
        <div className='w-fit h-fit rounded border-2 bg-white shadow-sm mt-10 mx-auto'>
            <div className='text-2xl font-bold text-green-900 text-left ml-5'>{year}. {month}</div>
            <div className='flex justify-end gap-5 h-10 text-right mr-5'> 
              <Button content="W1"></Button>
              <Button content="W2"></Button>
              <Button content="W3"></Button>
              <Button content="W4"></Button>
              <Button content="W5"></Button>
            </div>
            
            <div className='m-3 mx-5 grid grid-cols-4 shadow'>
                {weeklyPlan.map((day, i)=>
                <WeeklyDisplay key={i} day={day}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Weekly