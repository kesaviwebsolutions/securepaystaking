import React,{useState, useEffect} from 'react'
import {StakeBalace, totakRewardEarned, unstake, getDetails, emergencyaction, orderID} from "./../Web3/Wallets"
import toast, { Toaster } from 'react-hot-toast'
import ReactTooltip from 'react-tooltip';
import {FaQuestionCircle} from 'react-icons/fa'

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
      console.log(mysta)
      const rewards = await totakRewardEarned();
      setRewards(rewards)
      const event = await getDetails();
      console.log(event)
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
      return days+"D " + hour + "H"
    }
    else{
      return "UNSTAKE"
    }
  } 

  const EmergencyUnstake =async(id)=>{
    const data = await emergencyaction(id);
    if(data.status){
      notify('Unstake Successfully')
    }
  }

  const unStakeAmount = async (id, end) => {
    console.log(Number(new Date().getTime()/1000).toFixed(0), Number(end))
    if(new Date().getTime()/1000 < Number(end)){
      warning("Can not unstake before end time")
      return true;
    }
    const data = await unstake(id)
    if (data.status) {
      notify('Staked Successfully')
      const rewards = await totakRewardEarned();
      setRewards(rewards)
      const event = await getDetails();
      setEvents(event)
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
                    <p className="srpay-count">{isNaN(mystake) ? "0" :  Number(mystake).toFixed(0)} SRPAY</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-area2">
                <div className="card-body content">
                  <div className="srpay-content">
                    <h6 className="srpay-text">Total Earning</h6>
                    <p className="srpay-count">{isNaN(reward) ? "0" : Number(reward).toFixed(5)} SRPAY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mystake-content">
            <table class="table">
              <thead>
                <tr className="head">
                  <th scope="col">Order Id</th>
                  <th scope="col">Staking Date</th>
                  <th scope="col">Token Amount</th>
                  <th scope="col">Staking End</th>
                  <th scope="col">Action</th>
                  <th scope="col">Emergency</th>
                </tr>
              </thead>
              <tbody>
              
               {events && events.map((item)=>{
               return <tr className='body'>
                  <th scope="row">{item.id}</th>
                  <td>{new Date(Number(item.starttime)*1000).toLocaleDateString()}</td>
                  <td>{item.amount/10**18}</td>
                  <td>{new Date(Number(item.endtime)*1000).toLocaleDateString()}</td>
                 {!item.claimed ? <td className='' onClick={()=>unStakeAmount(item.id,item.endtime)}>{upcommingDate(item.endtime)}</td> :
                  <td>UNSTAKED</td>}
                  <td><p className='emergency' data-tip="hello world" onClick={()=>EmergencyUnstake(item.id)}>Emergency Withdraw &nbsp;&nbsp;<span
                    type="button"
                    className="fs-5 ml-1"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="10% fee will be charged">
                <FaQuestionCircle size={20}/>
              </span></p></td>
                </tr>
               })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Toaster/>
      <ReactTooltip />
    </div>
  )
}
