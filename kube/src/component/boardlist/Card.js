import { useNavigate } from "react-router-dom";

export function Card({ board_id, category, imageurl, desc, price }) {
    const navigate = useNavigate();
    return (
      <div style={{
                    maxWidth:"50%",
                    display:"inline-block",
                    }}>
        <div onClick={() => {
          navigate(`/brp/${board_id}`)
        }}
            style={{margin:"20px",
                    width:"300px", height:"300px",
                    overflow:"hidden",
                    borderRadius:"20px",
                    transition:"0.5s",
                    animation:"ease-in-out",
                    backgroundColor:"#EBEBF5",
                    textAlign:"center",
                    display:"table",}}>
          <div style={{overflow:"hidden",
                        display:"table-cell",
                        verticalAlign:"middle"}}>
            <img style={{
                maxWidth:"250px", maxHeight:"250px"}} 
                src={imageurl} alt="" />
          </div>
        </div>
        <div style={{margin:"10px", marginTop:"20px", marginBottom:"80px",}}>
            <div style={{
                        marginLeft:"35px",
                        textDecorationLine:"underline",
                        fontWeight:"700",
                        fontSize:"20px",
                        display:"flex",
                        alignItems:"center"
                        }}>
              <div>{category}</div>
            </div>
            <div style={{
                        margin:"15px",
                        marginLeft:"35px",
                        fontWeight:"400",
                        fontSize:"18px",
                        display:"flex",
                        alignItems:"center"
                        }}>
              <div>{desc}</div>
            </div>
            <div style={{
                        margin:"15px",
                        marginLeft:"35px",
                        fontWeight:"700",
                        fontSize:"20px",
                        display:"flex",
                        alignItems:"center"
                        }}>
                <div>{price}</div>
            </div>
          </div>
      </div>
    );
  }
  