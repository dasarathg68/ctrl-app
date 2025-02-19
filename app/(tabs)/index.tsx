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
            <View className="bg-neutral-900/80 backdrop-blur-xl p-5 rounded-2xl flex-row justify-between items-center border border-neutral-800/50">
              <View className="flex-row items-center gap-4">
                <View className="bg-neutral-800 p-2 rounded-xl">
                  <MaterialIcons name="menu" size={24} color="white" />
                </View>
                <View>
                  <View className="flex-row items-center gap-2">
                    <Text className="text-white text-lg font-semibold">
                      SOL
                    </Text>
                    <View className="bg-neutral-800 px-2 py-0.5 rounded-full">
                      <Text className="text-neutral-400 text-xs">Solana</Text>
                    </View>
                  </View>
                  <Text className="text-neutral-500 text-sm mt-0.5">
                    664bcy...aKLPLZ
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <Pressable className="bg-neutral-800 p-2.5 rounded-full">
                  <Ionicons
                    name="share-social-outline"
                    size={20}
                    color="white"
                  />
                </Pressable>
                <Pressable className="bg-neutral-800 p-2.5 rounded-full">
                  <MaterialIcons name="qr-code" size={20} color="white" />
                </Pressable>
                <Pressable className="bg-neutral-800 p-2.5 rounded-full">
                  <MaterialIcons name="content-copy" size={20} color="white" />
                </Pressable>
              </View>
            </View>

            {/* USDC Token */}
            <View className="bg-neutral-900/80 backdrop-blur-xl p-5 rounded-2xl flex-row justify-between items-center border border-neutral-800/50">
              <View className="flex-row items-center gap-4">
                <View className="bg-neutral-800 p-2 rounded-xl">
                  <MaterialIcons name="attach-money" size={24} color="white" />
                </View>
                <View>
                  <View className="flex-row items-center gap-2">
                    <Text className="text-white text-lg font-semibold">
                      USDC
                    </Text>
                    <View className="bg-neutral-800 px-2 py-0.5 rounded-full">
                      <Text className="text-neutral-400 text-xs">Solana</Text>
                    </View>
                  </View>
                  <Text className="text-neutral-500 text-sm mt-0.5">
                    664bcy...aKLPLZ
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <Pressable className="bg-neutral-800 p-2.5 rounded-full">
                  <Ionicons
                    name="share-social-outline"
                    size={20}
                    color="white"
                  />
                </Pressable>
                <Pressable className="bg-neutral-800 p-2.5 rounded-full">
                  <MaterialIcons name="qr-code" size={20} color="white" />
                </Pressable>
                <Pressable className="bg-neutral-800 p-2.5 rounded-full">
                  <MaterialIcons name="content-copy" size={20} color="white" />
                </Pressable>
              </View>
            </View>

            {/* Receive Section */}
            <View className="bg-neutral-900/80 backdrop-blur-xl p-5 rounded-2xl mt-4 border border-neutral-800/50">
              <View className="space-y-4">
                <View className="border border-neutral-800 rounded-xl p-4">
                  <Text className="text-neutral-400 text-base">
                    Enter link from friend
                  </Text>
                </View>
                <Pressable className="bg-white rounded-xl p-4 active:opacity-90">
                  <Text className="text-black text-center font-semibold text-base">
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
