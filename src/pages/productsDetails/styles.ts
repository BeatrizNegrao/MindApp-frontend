import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F8',
    padding: 20,
    alignItems: 'center'
  },
  backButton: {
    position:'absolute',
    alignSelf:'flex-start',
    top: 35,
    padding: 2
  },
  backButtonText: {
    fontSize:24,
    color:'black',
    fontWeight:'bold'
  },
  boxTop: {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingTop: 70
  },
  subTitle: {
    fontSize: 12,
    paddingVertical: 10,
    color: '#555'
  },
  editButton: {
    top: 25,
    padding: 2,
    alignSelf: 'flex-end'
  },
  editButtonText: {
    fontSize: 14,
    color: '#0478F5'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20
  },
  details: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 60,
    padding: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  name: {
    fontSize: 14
  },
  description: {
    fontSize: 14,
    color: '#777',
    marginVertical: 5
  },
  price: {
    fontSize: 12,
    color: '#0478F5'
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 5,
    width: '100%',
  },  
  stock: {
    fontSize: 14,
    color: '#555',
    paddingVertical: 5
  },
  removeButton: {
    backgroundColor: '#ff3b30',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    width: '45%',
    alignItems: 'center'
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});