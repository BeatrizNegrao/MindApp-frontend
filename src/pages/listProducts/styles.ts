import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F8',
    padding: 20
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 10
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: '#E4E3E9',
    height: 40,
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    marginBottom: 15
  },
  list: {
    paddingBottom: 20
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  cardWithoutImage: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 10,
    marginRight: 10
  },
  productDetails: {
    flex: 1
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  productDescription: {
    fontSize: 14,
    color: '#777',
    marginVertical: 3
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 3
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000'
  },
  stockText: {
    fontSize: 14,
    color: '#555',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    width: '100%',
    marginVertical: 4
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16
  },
  emptyText: {
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16
  }
});