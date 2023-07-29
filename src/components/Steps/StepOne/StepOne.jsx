import styles from "./StepOne.module.css"
import stepOneData from "./stepOneData.js"

function GenderData({data}) {
  return (
    <select className={styles.selectStyle}>
      {data.map((gender) => {
        return (
          <option key={gender.value} value={gender.value}>
            {gender.type}
          </option>
        );
      })}
    </select>
  )
}

function CityData({data}) {
  return (
    <select className={styles.selectStyle} required>
      {data.map((city) => {
        return (
          <option key={city.value} value={city.value}>
            {city.name}
          </option>
        );
      })}
    </select>
  )
}

function StepOne() {
  return (
    <>
    <form data-phase="address">
      <h3 className={styles.formTitle}>寄送地址</h3>
      <section className={styles.formBody}>

        <div className={styles.formItem}>
          <div className={styles.inputGroupL1}> 
            <div className={styles.inputLabel}>稱謂</div>
            <div className={styles.selectContainer}>
              <GenderData data={stepOneData.gender} />
            </div>
          </div>          
          <div className={styles.inputGroupL2}>
            <div className={styles.inputLabel}>姓名</div>
            <input className={styles.inputStyle} type="text" placeholder="請輸入姓名"/>
          </div>
        </div>


        <div className={styles.formItem}>
          <div className={styles.inputGroupL2}>
            <div className={styles.inputLabel}>電話</div>
            <input className={styles.inputStyle} type="tel" placeholder="請輸入行動電話"/>
          </div>
          <div className={styles.inputGroupL2}>
            <div className={styles.inputLabel}>Email</div>
            <input className={styles.inputStyle} type="email" placeholder="請輸入電子郵件"/>
          </div>
        </div>

        <div className={styles.formItem}>
          <div className={styles.inputGroupL1}>
            <div className={styles.inputLabel}>縣市</div>          
            <div className={styles.selectContainer}>           
              <CityData data={stepOneData.city}/>             
            </div>
          </div>
          <div className={styles.inputGroupL2}>
            <div className={styles.inputLabel}>地址</div>
            <input className={styles.inputStyle} type="text" placeholder="請輸入地址"/>
          </div>
        </div>
      </section>
    </form>
    </>
  )
}

export default StepOne;