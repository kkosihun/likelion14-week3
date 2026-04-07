function Profile({name, gender, department, viewCount}){
    return (
        <>
        
        <p>이름 : {name}</p>
        <p>성별 : {gender}</p>
        <p>학과 : {department}</p>
        <p>조회수 : {viewCount}</p>

        </>
    );
}
export default Profile; //주로 이 방식을 사용함

// function Profile(Props){
//     return (
//         <>
        
//         <p>이름 : {Props.name}</p>
//         <p>성별 : {Props.gender}</p>
//         <p>학과 : {Props.department}</p>
//         <p>조회수 : {Props.viewCount}</p>

//         </>
//     );
// }
// export default Profile;