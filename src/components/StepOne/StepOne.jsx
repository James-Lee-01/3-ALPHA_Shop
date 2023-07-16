import styles from "./StepOne.module.css"
import StepOneData from "./StepOneData.jsx"

function CityData({data}) {
  return (
    <select className={styles.selectStyle} required>
      {data.map((city) => {
        return (
        <option value={city.value}>
          {city.name}
        </option>
        )
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
              <select className={styles.selectStyle}>
                <option value="mr" selected>先生</option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div>
          
          <div className={styles.inputGroupL2}>
            <div className={styles.inputLabel}>姓名</div>
            <input className={styles.inputStyle} type="text" placeholder="請輸入姓名" />
          </div>

        </div>


        <div className={styles.formItem}>
          <div className={styles.inputGroupL2}>

            <div className={styles.inputLabel}>電話</div>

            <input className={styles.inputStyle} type="tel" placeholder="請輸入行動電話" />
          </div>

          <div className={styles.inputGroupL2}>
            <div className={styles.inputLabel}>Email</div>
            <input className={styles.inputStyle} type="email" placeholder="請輸入電子郵件" />
          </div>

        </div>

        <div className={styles.formItem}>
          <div className={styles.inputGroupL1}>

            <div className={styles.inputLabel}>縣市</div>
            
            <div className={styles.selectContainer}>
              
              <CityData data={StepOneData.city} />
              
            </div>

          </div>

          <div className={styles.inputGroupL2}>
            <div className={styles.inputLabel}>地址</div>
            <input className={styles.inputStyle} type="text" placeholder="請輸入地址" />
          </div>

        </div>

      </section>
    </form>
    </>
  )
}

export default StepOne;