import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Avatarelement from "./elements/avatar-element";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Cardelements = () => {
  return (
    <Card x-chunk="dashboard-01-chunk-5 ">
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="grid overflow-auto max-h-96  gap-8 ">
        <Avatarelement
          image="/avatars/01.png"
          fallback="OM"
          title="Olivia Martin"
          subtitle="olivia.martin@email.com"
          data="+$1,999.00"
        />

        <Avatarelement
          image="/avatars/02.png"
          fallback="JL"
          title="Jackson Lee"
          subtitle=" jackson.lee@email.com"
          data="+$39.00"
        />
        <Avatarelement
          image="/avatars/03.png"
          fallback="IN"
          title="Isabella Nguyen"
          subtitle=" isabella.nguyen@email.com "
          data="+$299.00"
        />
        <Avatarelement
          image="/avatars/04.png"
          fallback="WK"
          title="William Kim"
          subtitle="will@email.com"
          data="+$99.00"
        />
        <Avatarelement
          image="/avatars/05.png"
          fallback="SD"
          title="Sofia Davis"
          subtitle="sofia.davis@email.com"
          data="+$39.00"
        />
        <Avatarelement
          image="/avatars/01.png"
          fallback="OM"
          title="Olivia Martin"
          subtitle="olivia.martin@email.com"
          data="+$1,999.00"
        />

        <Avatarelement
          image="/avatars/02.png"
          fallback="JL"
          title="Jackson Lee"
          subtitle=" jackson.lee@email.com"
          data="+$39.00"
        />
        <Avatarelement
          image="/avatars/03.png"
          fallback="IN"
          title="Isabella Nguyen"
          subtitle=" isabella.nguyen@email.com "
          data="+$299.00"
        />
        <Avatarelement
          image="/avatars/04.png"
          fallback="WK"
          title="William Kim"
          subtitle="will@email.com"
          data="+$99.00"
        />
        <Avatarelement
          image="/avatars/05.png"
          fallback="SD"
          title="Sofia Davis"
          subtitle="sofia.davis@email.com"
          data="+$39.00"
        />
      </CardContent>
    </Card>
  );
};

export default Cardelements;
