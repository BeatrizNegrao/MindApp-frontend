import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F2F8',
    padding: 20,
    alignItems: 'center'
  },
  boxTop: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  backButton: {
    position: 'absolute',
    alignSelf: 'flex-start',
    top: 35,
    padding: 2
  },
  backButtonText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingTop: 70
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    padding: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3
  },
  inputGroup: {
    marginBottom: 15,
    width: '100%'
  },
  inputLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#FAFAFA'
  },
  descriptionInput: {
    height: 50,
    textAlignVertical: 'top'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  halfInput: {
    width: '48%'
  },
  editProductButton: {
    backgroundColor: 'black',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 30,
    width: '60%',
    alignItems: 'center'
  },
  editProductButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  }
});
