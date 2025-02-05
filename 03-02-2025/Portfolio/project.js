

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
console.log(name);

let obj;
const project_name=document.getElementById('project-name');
const project_image=document.getElementById('project-image');
const project_para=document.getElementById('project-para')
const project_tech=document.getElementById('project-tech')
const project_feature=document.getElementById('project-feature')
const project_questions=document.getElementById('project-question')
    fetch('./project.json').then(async (response)=>
    {
        const data=await response.json();
        for(dt of data)
        {
            
            if(dt.id==name)
            {
                obj=dt;

                break;
            }
        }
        getProject()
    })

    function getProject()
    {
        const h1=document.createElement('h1');
        const span=document.createElement('span')
        h1.textContent=obj.name;
        span.textContent=obj.Description;
        project_name.appendChild(h1);
        project_name.appendChild(span);

        let img1=document.createElement('img')
        img1.src=obj.img;
        project_image.appendChild(img1)

        const p=document.createElement('p');
        p.textContent=obj.info;
        project_para.appendChild(p);

        obj.stack.forEach(element => {
            const li=document.createElement('li');
            li.textContent=element
            project_tech.appendChild(li)
        });

        obj.features.forEach((element)=>
        {
            const li=document.createElement('li')
            li.textContent=element
            project_feature.appendChild(li);
        })
         
        obj.questions.forEach((element)=>
        {
            const li=document.createElement('li')
            li.textContent=element
            project_questions.appendChild(li);
        })

    }
