const mySkills = [
    {skill: 'Data analytics', done: true},
    {skill: 'Data modeling', done: false},
    {skill: 'Information technology', done: false}
  ];

  module.exports = {
    allSkills,
    eachSkill
  };

  function allSkills(){
    return mySkills;
  };


  function eachSkill(idx){
    return mySkills[idx];
  };




  