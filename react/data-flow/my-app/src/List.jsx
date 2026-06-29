import Contact from './Contact';

const List = ({ arrNames, displayConvo }) => {

    return (
        <div>
            {arrNames.map((name) => (
                <Contact
                    key={name}
                    name={name}
                    displayConvo={displayConvo}
                />
            ))}
        </div>
    );
};
export default List;
