import { View, Text, Pressable, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-4">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-8">
            <Text className="text-white text-2xl font-bold">Solana wallet</Text>
            <View className="flex-row items-center gap-2">
              <Pressable>
                <Ionicons name="sunny-outline" size={24} color="white" />
              </Pressable>
            </View>
          </View>

          {/* Wallet Items */}
          <View className="space-y-3">
            {/* SOL Token */}
            <View className="bg-neutral-900 p-4 rounded-xl flex-row justify-between items-center">
              <View className="flex-row items-center gap-3">
                <MaterialIcons name="menu" size={24} color="white" />
                <View>
                  <Text className="text-white text-lg font-semibold">SOL</Text>
                  <Text className="text-gray-500 text-sm">664bcy...aKLPLZ</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-3">
                <Pressable className="bg-neutral-800 p-2 rounded-full">
                  <Ionicons
                    name="share-social-outline"
                    size={20}
                    color="white"
                  />
                </Pressable>
                <Pressable className="bg-neutral-800 p-2 rounded-full">
                  <MaterialIcons name="qr-code" size={20} color="white" />
                </Pressable>
                <Pressable className="bg-neutral-800 p-2 rounded-full">
                  <MaterialIcons name="content-copy" size={20} color="white" />
                </Pressable>
              </View>
            </View>

            {/* USDC Token */}
            <View className="bg-neutral-900 p-4 rounded-xl flex-row justify-between items-center">
              <View className="flex-row items-center gap-3">
                <MaterialIcons name="attach-money" size={24} color="white" />
                <View>
                  <Text className="text-white text-lg font-semibold">USDC</Text>
                  <Text className="text-gray-500 text-sm">664bcy...aKLPLZ</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-3">
                <Pressable className="bg-neutral-800 p-2 rounded-full">
                  <Ionicons
                    name="share-social-outline"
                    size={20}
                    color="white"
                  />
                </Pressable>
                <Pressable className="bg-neutral-800 p-2 rounded-full">
                  <MaterialIcons name="qr-code" size={20} color="white" />
                </Pressable>
                <Pressable className="bg-neutral-800 p-2 rounded-full">
                  <MaterialIcons name="content-copy" size={20} color="white" />
                </Pressable>
              </View>
            </View>

            {/* Receive Section */}
            <View className="bg-neutral-900 p-4 rounded-xl mt-4">
              <View className="space-y-4">
                <View className="border border-neutral-800 rounded-lg p-3">
                  <Text className="text-gray-400">Enter link from friend</Text>
                </View>
                <Pressable className="bg-white rounded-lg p-4">
                  <Text className="text-black text-center font-semibold">
                    Receive crypto
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
