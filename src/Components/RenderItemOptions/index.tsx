import { RFValue } from "react-native-responsive-fontsize";
import * as S from './style'
import { RenderItemHorizontalList } from "./model";
import { GlobalSkeletonComponent } from "../GlobalSkeletonComponent";
import { GlobalTextComponent } from "../GlobalTextComponent";

export const RenderItemOptions = ({
  selectedOption,
  handleRenderItem,
  item,
  renderSkeleton
}: RenderItemHorizontalList) => 
(
  renderSkeleton ? (
    <GlobalSkeletonComponent
      customStyle={{
        marginRight: RFValue(12),
        height: RFValue(15),
        borderRadius: RFValue(4),
        width: RFValue(75),
      }}
    />
  ) : (
    <S.ContainerOption selectedOption={selectedOption?.id === item?.id}
    onPress={() => {
      handleRenderItem(item.label)
    }}>
      <GlobalTextComponent
        color={selectedOption?.id === item?.id ? "secundaryColor" : "lightColor"}
        fontFamily="poppinsMedium"
        fontSize={14}
        text={item?.name}
      />
    </S.ContainerOption>
  )
)
