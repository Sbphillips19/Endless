import React from 'react';

class HowItWorks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
      componentDidMount() {
        fetch("https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge")
          .then(res => res.json())
          .then(
            (result) => {
            const sorted = result.sort(function(a, b) {
                return a.stepNumber - b.stepNumber;
            })

            sorted.map(item => item.versionContent.sort(function(a,b) {
                return new Date(b.effectiveDate).getTime() - new Date(a.effectiveDate).getTime();
            }))
            
              this.setState({
                isLoaded: true,
                items: sorted
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

    
      render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
            console.log(this.state)
          return (

            <div>
            <div>How It Works</div>
            <div className="card-container">
              {items.map(item => (
                <div key={item.id} className="card">
                  <div>{item.stepNumber}</div>
                  <div>{item.versionContent[0].title}</div>
                  <div>{item.versionContent[0].body}</div>
                </div>
              ))}
            </div>
            </div>
          );
        }
      }
  }

  export default HowItWorks;