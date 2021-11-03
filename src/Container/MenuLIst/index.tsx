import ColorList from "../../Components/UI/ColorList";
import YesNo from "../../Components/UI/YesNo";
import { useActions } from "../../Hooks/useActions";
import { useFetch } from "../../Hooks/useFetch";
import { useTypedSelector } from "../../Hooks/useTypedSelector";
import { postSelect } from "../../Redux/ReSelect/Selector";
import PostList from "../Post";
import "./index.css";

type MenuListProps = {};

const MenuList: React.FC<MenuListProps> = () => {
  const { modalToggle, postAction } = useActions();
  const handleFetch1 = useFetch(postAction);
  const post = useTypedSelector(postSelect);
  const handleFetch = () => {
    post.length < 1 && handleFetch1();
    modalToggle({
      toggle: true,
      component: <PostList />,
      size: "large",
    });
  };

  return (
    <div className="menu__list">
      <ul>
        <li
          className="menu__item"
          onClick={() => {
            modalToggle({
              toggle: false,
              component: <div></div>,
              size: "medium",
            });
          }}
        >
          <p>Home</p>
        </li>

        <li
          className="menu__item"
          onClick={() => {
            modalToggle({
              toggle: true,
              component: <ColorList />,
              size: "medium",
            });
          }}
        >
          <p>Settings</p>
        </li>
        <li className="menu__item" onClick={handleFetch}>
          <p>Json Placeholder</p>
        </li>

        <li
          className="menu__item"
          onClick={() =>
            modalToggle({ component: <YesNo />, size: "small", toggle: true })
          }
        >
          <p>Remove all todo list</p>
        </li>
      </ul>
    </div>
  );
};

export default MenuList;
