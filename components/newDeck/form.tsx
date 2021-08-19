import styles from '/styles/Home.module.css'

const Form = ()=>  { 
    const CreateDeck = async (event) => {
        event.preventDefault()
    
        const res = await fetch('/api/decks', {
          body: JSON.stringify({
            name: event.target.deck_name.value
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        })
    
        const result = await res.json()
        // result.user => 'Ada Lovelace'
      }
    
      return (
        <form onSubmit={CreateDeck}>
          <label htmlFor="deck_name">Deck Name</label>
          <input id="deck_name" name="deck_name" type="text" autoComplete="name" required />
          <button className={styles.button} type="submit">Create</button>
        </form>
      )
};
export default Form; 