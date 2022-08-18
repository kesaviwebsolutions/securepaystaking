import React,{useState, useEffect} from 'react'
import {StakeBalace, totakRewardEarned, unstake, getDetails} from "./../Web3/Wallets"
import toast, { Toaster } from 'react-hot-toast'

const notify = (msg) => toast.success(msg)
const warning = (msg) => toast.error(msg)
export default function MyStake({ user }) {
  const [mystake, setMystake] = useState(0)
  const [reward, setRewards] = useState(0)
  const [events, setEvents] = useState()

  useEffect(()=>{
    const init=async()=>{
      const mysta = await StakeBalace();
      setMystake(mysta)
      const rewards = await totakRewardEarned();
      setRewards(rewards)
      const event = await getDetails();
      console.log(event);
      setEvents(event)
    }
    init();
    setInterval(()=>{
      // init();
    },5000)
  },[user])

  const upcommingDate=(time)=>{
    var current = Math.round(new Date().getTime()/1000);
    var seconds =  time-current 
    if(seconds > 0){
      const days = Math.floor(seconds/86400)
      const hour = Math.floor(seconds / 3600) % 24;
      const min = Math.floor(seconds / 60) % 60;
      const sec = seconds % 60;
      // return days+"D :"+hour+"H :"+min+"M :"+sec+"S"
      return days+"D " + hour + "H left to unstake"
    }
    else{
      return "00:00:00:00"
    }
  } 

  const unStakeAmount = async (id, end) => {
    if(new Date().getTime() > Number(end)){
      warning("Can not unstake before end time")
      return true;
    }
    const data = await unstake(id)
    if (data.status) {
      notify('Staked Successfully')
    }
  }

  return (
    <div>
      <div className="container">
        <div className="srpay">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-area">
                <div className="card-body">
                  <div className="srpay-content">
                    <h6 className="srpay-text">Total Staked</h6>
                    <p className="srpay-count">{Number(mystake).toFixed(0)} SRPAY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-area2">
                <div className="card-body content">
                  <div className="srpay-content">
                    <h6 className="srpay-text">Total Earning</h6>
                    <p className="srpay-count">{reward} SRPAY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mystake-content">
            <table class="table">
              <thead>
                <tr className="head">
                  <th scope="col">Serial</th>
                  <th scope="col">Staking Date</th>
                  <th scope="col">Token Amount</th>
                  <th scope="col">Staking End</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              
               {events && events.map((item)=>{
               return <tr className='body'>
                  <th scope="row">{events.indexOf(item)+1}</th>
                  <td>{new Date(Number(item.starttime)*1000).toLocaleDateString()}</td>
                  <td>{item.amount/10**18}</td>
                  <td>{new Date(Number(item.endtime)*1000).toLocaleDateString()}</td>
                  <td onClick={()=>unStakeAmount(events.indexOf(item)+1,item.endtime)}>{upcommingDate(item.endtime)}</td>
                </tr>
               })}
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  )
}
