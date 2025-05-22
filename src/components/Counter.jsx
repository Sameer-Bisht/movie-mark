
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
        marginBottom: "20px",
        margin:"12px auto",
        backgroundColor: "linear-gradient(135deg, #EA173F, #A82158)",
        backgroundColor: "#9292922e",
        border:"1px solid #3a3a3a",
        width: "70vw",
        borderRadius: "10px",
    }
    return(
        <section style={styles} className="counter-nav">
            <li  style={{ display: "flex", alignItems: "center",margin:"auto",justifyContent:"center",gap:"1rem" }}>
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