import { StyleSheet, Text, View, Pressable } from 'react-native';

const CategoryGridItem = ({ title, color, onPress }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridItem;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
