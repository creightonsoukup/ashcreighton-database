<div className='input-field col s12 m7'>
  <label className='active'>Round</label>
  <input
  name='round'
  type='text'
  ref={(round) => this.round = round} />
</div>
<div className='input-field col s12 m7'>
  <label className='active'>Date of Investment</label>
  <input
  name='date'
  type='date'
  className='datepicker'
  ref={(date) => this.date = date} />
</div>
<div className='input-field col s12 m7'>
  <label className='active'>Lead</label>
  <input
    name='lead'
    type='text'
    id='lead'
    ref={(lead) => this.lead = lead}/>
</div>
