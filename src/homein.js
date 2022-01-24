import { useState } from "react";
import { useSelector } from "react-redux";
// import { Popover, Grid, Paper, Typography, Container, Checkbox, makeStyles, Box } from '@material-ui/core'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


export const Components = () => {
    const [input, setInput] = useState("")
    var newalbum = []
    const photo = useSelector(state => state.photos)
    const album = useSelector(state => state.albums)
    for (let ph of album.albums) {

        const child = photo.photos.filter((e) => e.albumId == ph.id)
        const slicedChild = child.slice(0, 10);
        const rndnumber = Math.floor(Math.random() * (250 - 50) + 50);
        newalbum.push({ ...ph, children: slicedChild, rndnumber: rndnumber })
    }

    console.log(newalbum)

    return (
        <>
            <Container>

                <input style={{
                    width: "100%",
                    padding: "0.5rem 1rem",
                    fontSize: "0.9rem",
                    background: "#EEE5FF",
                    borderRadius: "5px",
                    border: "none",
                    marginTop: "2%"

                }} type="text" onChange={(e) => setInput(e.target.value)} placeholder="see your financal report" />
                {newalbum.map((e) => {
                    return (
                        <>


                            <Typography sx={{ display: 'flex', flexDirection: "row", my: 5 }} variant="h4" gutterBottom component="div">
                                {e.title}
                            </Typography>

                            <div>
                                {e.children.filter((val) => {
                                    if (input == "") {
                                        return val
                                    }
                                    else if (val.title.toLowerCase().includes(input.toLowerCase())) {
                                        return val
                                    }
                                }).map((ch) => {
                                    return (
                                        <>
                                            <Box sx={{ display: 'flex', flexDirection: "row"}}>

                                                <img src={ch.url} width="65" height="65" />


                                                <Typography sx={{ width: "100%", marginLeft: "2vh"  }}>


                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        <Typography variant="h6" gutterBottom component="div">{ch.title}</Typography>
                                                        {(e.rndnumber > 75) ? <Typography sx={{color:"red"}} variant="h5" gutterBottom component="div"> $ {e.rndnumber}</Typography> :
                                                            <Typography variant="h4" gutterBottom component="div"> $ {e.rndnumber}</Typography>
                                                        }
                                                    </Box>


                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', }}>

                                                        <Typography variant="body1" gutterBottom style={{ color: "#91919F" }}>
                                                            <a style={{ color: "#91919F" }} href={ch.thumbnailUrl} >{ch.thumbnailUrl}</a>
                                                        </Typography>
                                                        <Typography variant="body1" gutterBottom >10:00AM     </Typography>
                                                    </Box>
                                                </Typography>


                                            </Box>

                                        </>
                                    )
                                })}
                            </div>
                        </>
                    )
                })}

            </Container>
        </>
    )

}