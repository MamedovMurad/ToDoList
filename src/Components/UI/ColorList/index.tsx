import { useActions } from '../../../Hooks/useActions';
import './index.css'
const colorList = ["red", "green", "yellow", "#777", "#999", '#C95FFA','#BD8CFF','#FFB2AC','#55E0C5','#36BAF7','#6AF790',
'#F1FA93','#7BE395', '#88E1FB','#E3C07B','#FFE8E3','#7BC6E3','#6CE330','#6AF790','#DED1B8','#F5EED7','#E0DDC3',
'#A4B1F5','#A4F5A5'
];

const ColorList: React.FC = () => {
  const {colorSelect} =   useActions();
  return (
  <>
  <div className="color__list">
      {
          colorList.map((color,i)=>(
              <span key={i} style={{backgroundColor:color}} onClick={()=>colorSelect(color)}>
                
              </span>
          ))
      }
  </div>
  </>
  )};

export default ColorList;
