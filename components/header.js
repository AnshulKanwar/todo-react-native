import { StyleSheet, Text } from 'react-native'

export default function Header() {
  return (
    <Text style={styles.header}>Todo</Text>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 48,
    fontWeight: 'bold'
  }
})