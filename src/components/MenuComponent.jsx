// DropdownMenu.js
import React, { useState, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal,
    TouchableWithoutFeedback,
    Dimensions,
    UIManager,
    findNodeHandle,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const DropdownMenu = ({ options = [], onSelect,color="#fff" }) => {
    const [visible, setVisible] = useState(false);
    const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
    const buttonRef = useRef(null);

    const openMenu = () => {
        if (buttonRef.current) {
            UIManager.measure(
                findNodeHandle(buttonRef.current),
                (x, y, width, height, pageX, pageY) => {
                    let menuHeight = options.length * 44 + 8; // estimate menu height
                    let menuWidth = 160; // fixed width

                    let top = pageY + height; // default below button
                    let left = pageX; // default align left

                    // adjust if menu overflows bottom
                    if (top + menuHeight > SCREEN_HEIGHT) {
                        top = pageY - menuHeight;
                    }

                    // adjust if menu overflows right
                    if (left + menuWidth > SCREEN_WIDTH) {
                        left = SCREEN_WIDTH - menuWidth - 10; // margin
                    }

                    setMenuPosition({ top, left });
                    setVisible(true);
                }
            );
        }
    };

    const closeMenu = () => setVisible(false);

    return (
        <View>
            {/* 3-dot button */}
              <TouchableOpacity ref={buttonRef} onPress={openMenu} style={styles.button}>
                <Icon name="more-vert" size={28} color={color} />
            </TouchableOpacity>
            {/* Dropdown Modal */}
            <Modal
                visible={visible}
                transparent
                animationType="fade"
                onRequestClose={closeMenu}
            >
                <TouchableWithoutFeedback onPress={closeMenu}>
                    <View style={styles.overlay}>
                        <View
                            style={[
                                styles.menu,
                                { top: menuPosition.top, left: menuPosition.left },
                            ]}
                        >
                            {options.map((option, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        onSelect(option.value);
                                        closeMenu();
                                    }}
                                    style={styles.menuItem}
                                >
                                    <Text style={styles.menuItemText}>{option.label}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 24,
    },
    overlay: {
        flex: 1,
        backgroundColor: "transparent",
    },
    menu: {
        position: "absolute",
        backgroundColor: "#fff",
        borderRadius: 6,
        elevation: 5,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        paddingVertical: 4,
        width: 160,
    },
    menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    menuItemText: {
        fontSize: 16,
    },
});

export default DropdownMenu;
