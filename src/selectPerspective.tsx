import { useEffect, useMemo, useState } from "preact/hooks";
import { getAd4mClient } from '@perspect3vism/ad4m-connect'
import { PerspectiveProxy } from "@perspect3vism/ad4m";

function Button({ onClick, children }) {
    return (
        <div onClick={(e) => {
            e.preventDefault();
            onClick()
        }}>
            {children}
        </div>
    )
}

export default function SelectPerspective({ perspective, setPerspective }) {
    const [page, setPage] = useState(0);
    const [perspectives, setPerspectives] = useState<PerspectiveProxy[]>([]);
    const [name, setName] = useState("")

    useEffect(() => {
        const getperspective = async () => {
            const client = await getAd4mClient();
            console.log(client)
            const perspectives = await client.perspective.all();

            console.log(perspectives)

            setPerspectives(perspectives)
        }

        getperspective()
    }, [page, setPerspectives])


    const createPerspecive = async (e) => {
        e.preventDefault();

        const client = await getAd4mClient();
    
        const perspective = await client.perspective.add(name);

        setPerspective(perspective)

        // window.location.pathname = `/${perspective.uuid}`;
    }

    return (
        <div className="mainModal">
            {
                page === 0 && (
                    <>
                        <Button onClick={() => {setPage(1)}}>
                            Select Perspective
                        </Button>
                        <Button onClick={() => {setPage(2)}}>
                            Create Perspective
                        </Button>
                    </>
                )
            }
            {
                page === 1 && (
                    <>
                        {
                            perspectives.map(p => (
                                <Button onClick={() => {
                                    setPerspective(p)
                                    
                                    // window.location.pathname = `/${p.uuid}`;
                                }}>
                                    {p.name}
                                </Button>
                            ))
                        }
                    </>
                )
            }
            {
                page === 2 &&  (
                    <>
                        <input value={name} onChange={e => setName(e.target.value)} placeholder={"Enter perspective name here..."}/>
                        <button onClick={createPerspecive}>Submit</button>
                    </>
                )
            }
        </div>
    )
}