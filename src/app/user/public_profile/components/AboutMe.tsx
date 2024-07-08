import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaRegEdit } from "react-icons/fa";

export default function AboutMe() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-semibold">About Me</h3>
        <Button variant={"outline"}>
          <FaRegEdit className="text-xl font-semibold" />
        </Button>
      </div>
      <p className="text-gray-500">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, nobis?
        Quia, numquam quidem fugiat debitis atque temporibus laborum autem et ab
        fugit iusto, minima nemo reprehenderit! Neque cumque a praesentium,
        dolor iste eos nisi animi fuga quisquam est ipsam nulla, assumenda
        molestias voluptatum qui nostrum suscipit architecto. Placeat aut
        obcaecati maiores, quos corporis nesciunt molestiae ex sequi, ut, ea
        quasi odit suscipit inventore esse necessitatibus ratione cumque labore.
      </p>
    </Card>
  );
}
