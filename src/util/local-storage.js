
export const get = async(key) => {
    try {
      const value = JSON.parse(await localStorage.getItem(key))
      if (value === null) return undefined
      return value
    } catch(e) {
      console.log(e)
      return undefined
    }
  }
  
  export const set = async(key, value) => {
    try {
      await localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.log(e)
    }
  }