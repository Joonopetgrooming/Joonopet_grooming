export default function JoonoPetLuxury() {
  return (
    <div style={{background:"#151515",color:"white",minHeight:"100vh",padding:"40px",fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:"48px"}}>JOONOPET GROOMING</h1>
      <p>14년 경력 애견미용 강사출신 미용사</p>

      <div style={{marginTop:"30px",display:"flex",flexDirection:"column",gap:"15px",maxWidth:"400px"}}>
        <a href="https://map.naver.com/p/entry/place/2054479552?placePath=/ticket?entry=plt&fromPanelNum=1&additionalHeight=76&timestamp=202605181232&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0959372&lat=37.7457741&c=15.00,0,0,0,dh"
           style={{padding:"18px",borderRadius:"20px",background:"#7b2030",color:"white",textDecoration:"none",textAlign:"center"}}>
           ✨ 네이버 예약하기
        </a>

        <a href="tel:01041808447"
           style={{padding:"18px",borderRadius:"20px",background:"#222",color:"white",textDecoration:"none",textAlign:"center"}}>
           📞 전화 상담
        </a>

        <a href="https://www.instagram.com/joonopet_grooming/"
           style={{padding:"18px",borderRadius:"20px",background:"#222",color:"white",textDecoration:"none",textAlign:"center"}}>
           📷 인스타그램
        </a>
      </div>
    </div>
  )
}
