 export const SeriseCard = (props)=>{
    console.log(props);
    // eslint-disable-next-line react/prop-types
    const {img_url, name, rating, description, cast, genre, watch_url} = props.e
    
    return(
                
        <li className="li">
         <div>
            <img src= {img_url} alt=""  height="40%" width= "30%" />
          </div>
          <h2>Name: {name}</h2>
          <h3>Rating: {rating}</h3>
          <p>Summary: {description} </p>
          <p>Cast: {cast}</p>
          <p>Genre: {genre} </p>
          <a href={watch_url} target='_blank'>click to watch</a>
          
          <br />
          <button>watch now   </button>
          
          <h1> completed #15th video. baaki ka kal kyuli bill bhi banana hai aaj nahi kal kunga, aaj thak gya hun kal vdo inline css</h1>
          aaj bhi rest kyuki aaj man ni krra hai kal se krunga, aaj mind thoda disturb hai 
          
          weekend ko aaram , week days ko kam 
          baaki ka mai, kal krunga, good night, not in good mood, karunga pakka karunga, thoda time ni mil para hai , but for sure krunga. for now good night
          every thing is going not up to the plan, sayd thoda break lena he best hoga, kyuki sara kam khtm krte he aaram se coding krnge , good night 
          dadu expire, ab manhara jana padega, to aaj kl push krna thoda dikkt hai , baaki mai jaisa hoga waisa mai bolunga
          krta hun , avi thoda baitha hun, ghr aake krunga aaram se, thank you, for understanding, aaj maine adi se baat krra busness ke bare let&apos;s take a risk and roll, agar chal jata hai business to well and good, and agar ni chalta hai, to back to kam kaaj, hoping hmlog ache se kr paye sab kuch. bye goodnight
          
          as your know, pdhai ke time wla drama, har bar ka wohi hai, pata ni aise kaise chalega, seriouly I freaked out. ye sab drama se chutti mile to jake pdhai ho. see u all tomorrow . Bye good night
          
          we went for a movie today, and also I missed one class, this time my attendance will go down, coz already missed my two classes.
          also it&apos;s an amazing day, mama ji brought new phone, and that is one plus 9pro. It was my fav phone in 2021, but unfortunatly mere kismat me nahi tha. but coding i guess ab suru hoga nana ji ke bhoj ke baad, so stay tune. good night
           
           It was a good day, aaj invite krne gye, to bahut thak gye, and sahi rha din, pdhai suru krnge, aaj ke liye etna he. good night
           
           aaj sara invitation complete hogya, bas kuch din or uske baad phir pdhai . avi krlu thoda time pass, uske baad dsa bhi suru krunga sath me, or apne fitness pe bhi dhiyan dunga. baaki kal milte hai, manhara me 
          bye, good night
          
          aaj ka din normal tha. today i went to the gym, and also had a great day, wish kal bhi thik ho and sab ache se ho jaye, good night
          
          hey github, aaj mai ghr aaya, and you know what, talab gye the nahane ke liye, sach bolu to ek waisa talab me gye the, jaha jana mana tha, and litery I feel something aajab. aisa lga jaise kisi ka presence hai woha. 
          Ek min ke liye lga ki pta ni kon hai, kon muje aawaj diya, aisa lga ki koi piche se bula rha tha. but thoda der baad dikha ki koi buddhi hai, jo khet me kaam krri hai, then muje chain me chain me aaya
          </li>
                
              )
 }