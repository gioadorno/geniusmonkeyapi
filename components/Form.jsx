import { useState, useEffect } from 'react';


const Form = ({ data }) => {

    const [ id, setId ] = useState('');
    const [dealer, setDealer] = useState('');
    const [ deck, setDeck ] = useState([]);
    const [ arrange, setArrange ] = useState([])

    const onChange = async (e) => {
        setId(e.target.value);

        try {
            const getDealer = await fetch(`https://dealer-5wb4b3itbq-uc.a.run.app/dealers/${e.target.value}/`, {
                headers: {
                  Authorization: `Token ${process.env.GENIUS_MONKEY}`
                },
                
              }).then(res => res.json());

              setDealer(getDealer)
        } catch (error) {
            console.log(error)
        }
    };



    const onChangeCards = async (e) => {
            try {
                const getDeck = await fetch(`https://dealer-5wb4b3itbq-uc.a.run.app/dealers/${id}/${e.target.value}/`, {
                    headers: {
                      Authorization: `Token ${process.env.GENIUS_MONKEY}`
                    },
                    
                  }).then(res => res.json());
    
                  setDeck(getDeck)
            } catch (error) {
                console.log(error)
            }
    };

    const onChangeShuffle = async (e) => {
        try {
            const getShuffle = await fetch(`https://dealer-5wb4b3itbq-uc.a.run.app/dealers/${id}/${e.target.value}/`, {
                method: 'PUT',
                headers: {
                    Authorization: `Token ${process.env.GENIUS_MONKEY}`,        
                },
                body: JSON.stringify(deck)
              }).then(res => res.json());

              setArrange(getShuffle)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        deck && onChangeCards();
        arrange && onChangeShuffle();
    }, [id])

  return (
    <div className='w-screen flex h-full items-center justify-center'>
        <div className='flex items-center w-full h-full justify-center'>
            <form className='rounded-xl bg-white h-3/4 w-5/6 xl:w-2/3 flex flex-col items-center space-y-5 py-1 lg:py-5 px-8'>
                <h1 className='text-xl font-semibold pb-12'>Form</h1>
                <select onChange={onChange} name='id' className='w-full xl:w-3/4 outline-none border-b-[1px] border-black py-3'>
                    <option value=''>Select a Dealer</option>
                    {data.map(({ name, id }) => (
                        <option key={id} value={id}>
                            {name}
                        </option>
                    ))}
                </select>
                {id ?
                <select onChange={onChangeCards} name='option' className='w-full xl:w-3/4 outline-none border-b-[1px] border-black py-3'>
                    <option value=''>Select an Option(Deck)</option>
                    <option value='deck'>
                        Deck
                    </option>
                </select>
                :
                <p>Please select a Dealer</p>
                }
                  {deck != '' ?
                <select onChange={onChangeShuffle} name='option' className='w-full xl:w-3/4 outline-none border-b-[1px] border-black py-3'>
                    <option value=''>Select an Option</option>
                    <option value='shuffle'>
                        Shuffle
                    </option>
                    <option value='arrange'>
                        Arrange
                    </option>
                </select>
                :
                <p>Please select a Deck</p>
                }
            </form>
        </div>
        <div className='items-center justify-center w-full h-full flex flex-col rounded-2xl overflow-auto'>
            <div className='flex bg-[#ffffffd3] rounded-2xl p-2 xl:p-14 items-center  flex-col w-3/4 h-4/5 space-y-3 overflow-y-auto'>
                <div className='flex border-b-[1px] border-black flex-col w-full items-center'>
                    <h1 className='font-semibold text-xl py-1'>All Dealers</h1>
                    {data.map(({ name, id }) => (
                            <p className='' key={id}>
                                {name}
                            </p>
                        ))}
                </div>
                <div className='flex border-b-[1px] border-black flex-col w-full items-center'>
                    <h1 className='font-semibold text-xl py-1'>Dealer Chosen</h1>
                    {dealer &&
                        <p className='py-1'>
                            {dealer.name}
                        </p>

                    }
                </div>
                <div className='flex border-b-[1px] border-black flex-col items-center overflow-y-auto w-full h-1/2 xl:h-[200px] scrollbar-track-slate-300/20 scrollbar-thumb-[#e96d5dcb] scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thin'>
                    <h1 className='font-semibold text-xl py-1'>Deck</h1>
                    {deck &&
                        deck?.map(({ rank, suit }) => (
                            <div key={suit + id + rank} className='w-full h-[100px] flex space-x-3'>
                                <p>
                                    {rank}
                                </p>
                                <p>
                                    {suit}
                                </p>
                            </div>
                        ))

                    }
                </div>
                <div className='flex border-b-[1px] border-black flex-col items-center overflow-y-auto w-full h-1/2 xl:h-[200px] mt-12 scrollbar-track-slate-300/20 scrollbar-thumb-[#e96d5dcb] scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-thin'>
                    <h1 className='font-semibold text-xl py-1'>Shuffled Deck</h1>
                    {arrange &&
                        arrange?.map(({ rank, suit }) => (
                            <div key={rank + id} className='w-full h-[100px] flex space-x-3'>
                                <p>
                                    {rank}
                                </p>
                                <p>
                                    {suit}
                                </p>
                            </div>
                        ))

                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form