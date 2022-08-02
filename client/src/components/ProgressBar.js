const ProgressBar = (props) => {
    const { bgcolor, finalScore } = props;
    const containerStyles = {
        height: 20,
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: "0 auto",
        
      }
      const fillerStyles = {
        height: '100%',
        width: `${finalScore}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${finalScore}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;