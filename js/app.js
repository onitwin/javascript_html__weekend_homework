document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded- well done!');


  const form=document.querySelector('#form-to-fill') //select the form as teh target


  const handleFormSubmit=function(event){
    event.preventDefault();
    const checked=[]; //holder foor all checked proficiencies
    const unchecked=[];//holder for unchecked proficiencies

    const proficiencies=event.target.proficiencies; //grabbed all the proficiencies
    const characterName=event.target.charactername.value;
    const characterClass=event.target.characterclass.value;
    const characterLevel=event.target.characterlevel.value;
    const characterAc=event.target.characterac.value;

    for (proficiency of proficiencies){
      if (proficiency.checked){
        checked.push(proficiency.id);
      }else{
        unchecked.push(proficiency.id);
      }
    }

    const statContainer=document.createElement('div') //div that acts as receiver for all created elements per event
    statContainer.setAttribute('id','container-for-proficiencies')
    statContainer.setAttribute('class',characterClass)
    const article=document.querySelector('article') //select parent element
    const cName=document.createElement('h5') //creates element template
    const cClass=document.createElement('h5')
    const cLevel=document.createElement('h5')
    const cAc=document.createElement('h5')
    cName.textContent="NAME :"+characterName// fills element
    cClass.textContent="CLASS: "+characterClass
    cLevel.textContent="LVL: "+characterLevel
    cAc.textContent="AC: "+characterAc
    article.appendChild(statContainer)
    statContainer.appendChild(cName)
    statContainer.appendChild(cClass)
    statContainer.appendChild(cLevel)
    statContainer.appendChild(cAc)


    for (proficiency of checked){
      const stat=document.createElement('p')
      stat.textContent=proficiency
      // const article=document.querySelector('article')
      statContainer.appendChild(stat)
      event.target.reset()

    }
  }


  form.addEventListener('submit', handleFormSubmit) //trigger and reaction to trigger?


















});
