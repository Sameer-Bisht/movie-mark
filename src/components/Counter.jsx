
import Data from  "../api/data.json"
const Counter = ({currUser,user,setUser})=>{
    const userData = Data.users[currUser]
     const searchStyle = {
    width: "200px",
    padding: "5px",
    margin: "5px",
    borderRadius:"10px",
    height:"40px"
  }
    const styles = {
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        textAlign: "center",
        fontSize: "18px",
        marginBottom: "20px"
    }
    return(
        <section style={styles} className="counter-nav">
            <li  style={{ display: "flex", alignItems: "center",justifyContent:"space-between" }}>
          <label htmlFor="">Set User</label>
          <select
          className="user-selection"
            value={user}
            onChange={(event) => setUser(event.target.value)}
            style={{ ...searchStyle, width: "120px",padding:"5px",margin:"5px",borderRadius:"10px",height:"40px" }}
          >
            
            <option value="sameer">Sameer</option>
            <option value="saurav">Saurav</option>
          </select>
        </li>
            <h2 style={{marginTop:"2rem"}}>{`You Have Watched ${userData.length} Movies`}</h2>
        </section>
    )

}
export default Counter;