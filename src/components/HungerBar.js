import {useSelector} from "react-redux";

const HungerBar = () => {

    const hunger = useSelector(state => state.hunger);

    return (
        <div className="hunger-bar">
            <div className="hunger" style={{width: hunger+"%"}}></div>
        </div>
    );
};

export default HungerBar;