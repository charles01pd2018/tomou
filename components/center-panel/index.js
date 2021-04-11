const CenterPanel = ({
    id,
    content
}) => {

    return (
        <section id={id} className='center-panel-container'>
            {children}
        </section>
    );
}