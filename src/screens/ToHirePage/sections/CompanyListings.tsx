import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { useState } from "react";

interface Listing {
  id: number;
  company: string;
  position: string;
  inNeedOf: string;
  timeIn: string;
  timeOut: string;
  salary: string;
  workDays: number;
  progress: number;
  location: string;
}

const mockListings: Listing[] = [
  {
    id: 1,
    company: "Mall Construction",
    position: "Mall Construction",
    inNeedOf: "Carpenter (10)",
    timeIn: "9:00 AM",
    timeOut: "5:00 PM",
    salary: "₱850.00/day",
    workDays: 14,
    progress: 8,
    location: "Rizal St, Laguna Province",
  },
  {
    id: 2,
    company: "Mall Construction",
    position: "Mall Construction",
    inNeedOf: "Carpenter (10)",
    timeIn: "9:00 AM",
    timeOut: "5:00 PM",
    salary: "₱850.00/day",
    workDays: 14,
    progress: 8,
    location: "Rizal St, Laguna Province",
  },
  {
    id: 3,
    company: "Mall Construction",
    position: "Mall Construction",
    inNeedOf: "Carpenter (10)",
    timeIn: "9:00 AM",
    timeOut: "5:00 PM",
    salary: "₱850.00/day",
    workDays: 14,
    progress: 8,
    location: "Rizal St, Laguna Province",
  },
  {
    id: 4,
    company: "Mall Construction",
    position: "Mall Construction",
    inNeedOf: "Carpenter (10)",
    timeIn: "9:00 AM",
    timeOut: "5:00 PM",
    salary: "₱850.00/day",
    workDays: 14,
    progress: 8,
    location: "Rizal St, Laguna Province",
  },
];

interface NewListing {
  position: string;
  inNeedOf: string;
  count: string;
  timeIn: string;
  timeOut: string;
  salary: string;
  workDays: string;
  location: string;
}

export const CompanyListings = (): JSX.Element => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [listings, setListings] = useState(mockListings);
  const [formData, setFormData] = useState<NewListing>({
    position: "",
    inNeedOf: "",
    count: "",
    timeIn: "",
    timeOut: "",
    salary: "",
    workDays: "",
    location: "",
  });

  const handleInputChange = (field: keyof NewListing, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCreateListing = () => {
    if (
      formData.position &&
      formData.inNeedOf &&
      formData.count &&
      formData.timeIn &&
      formData.timeOut &&
      formData.salary &&
      formData.workDays &&
      formData.location
    ) {
      const newListing: Listing = {
        id: listings.length + 1,
        company: formData.position,
        position: formData.position,
        inNeedOf: `${formData.inNeedOf} (${formData.count})`,
        timeIn: formData.timeIn,
        timeOut: formData.timeOut,
        salary: formData.salary,
        workDays: parseInt(formData.workDays),
        progress: 0,
        location: formData.location,
      };
      setListings([...listings, newListing]);
      setFormData({
        position: "",
        inNeedOf: "",
        count: "",
        timeIn: "",
        timeOut: "",
        salary: "",
        workDays: "",
        location: "",
      });
      setShowCreateForm(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="bg-[#ff9d00] rounded-full px-6 py-2">
          <p className="[font-family:'Jost',Helvetica] font-bold text-black text-lg">
            Hello User!
          </p>
        </div>

        <div className="flex gap-3">
          <Button
            onClick={() => setShowCreateForm(false)}
            className="bg-[#ff9d00] hover:bg-[#ff8c00] text-black rounded-full px-6 py-2 h-auto [font-family:'Jost',Helvetica] font-semibold text-base"
          >
            Your Listings
          </Button>
          <Button
            onClick={() => setShowCreateForm(true)}
            className="bg-white hover:bg-gray-100 text-black rounded-full px-6 py-2 h-auto [font-family:'Jost',Helvetica] font-semibold text-base"
          >
            Create New Listing
          </Button>
        </div>
      </div>

      {!showCreateForm ? (
        <div className="grid grid-cols-2 gap-6">
          {listings.map((listing) => (
            <Card
              key={listing.id}
              className="bg-[#ff9d00] border-none rounded-[20px] shadow-[0px_4px_12px_#00000020]"
            >
              <CardContent className="p-6">
                <h3 className="[font-family:'Jost',Helvetica] font-bold text-black text-lg mb-4">
                  {listing.company}
                </h3>

                <p className="[font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-1">
                  In need of :
                </p>
                <p className="[font-family:'Jost',Helvetica] font-bold text-[#ff9d00] text-lg mb-4">
                  {listing.inNeedOf}
                </p>

                <div className="space-y-2 text-xs mb-4">
                  <p className="[font-family:'Jost',Helvetica] font-semibold text-black">
                    Time in : <span className="font-normal text-[#ff9d00]">{listing.timeIn}</span>
                  </p>
                  <p className="[font-family:'Jost',Helvetica] font-semibold text-black">
                    Time out : <span className="font-normal text-[#ff9d00]">{listing.timeOut}</span>
                  </p>
                  <p className="[font-family:'Jost',Helvetica] font-semibold text-black">
                    Salary : <span className="font-normal text-[#ff9d00]">{listing.salary}</span>
                  </p>
                  <p className="[font-family:'Jost',Helvetica] font-semibold text-black">
                    Total Work Days : <span className="font-normal text-[#ff9d00]">{listing.workDays}</span>
                  </p>
                  <p className="[font-family:'Jost',Helvetica] font-semibold text-black">
                    Location : <span className="font-normal text-[#ff9d00]">{listing.location}</span>
                  </p>
                </div>

                <Button className="w-full bg-white hover:bg-gray-100 text-black rounded-lg h-[36px] [font-family:'Jost',Helvetica] font-semibold text-sm">
                  View
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-white border-none rounded-[20px] shadow-[0px_4px_12px_#00000020]">
          <CardContent className="p-8">
            <h2 className="[font-family:'Jost',Helvetica] font-bold text-black text-2xl mb-6">
              Create New Listing
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                    Position/Project Name
                  </label>
                  <Input
                    type="text"
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                    placeholder="e.g., Mall Construction"
                    className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                    In Need Of (Role)
                  </label>
                  <Input
                    type="text"
                    value={formData.inNeedOf}
                    onChange={(e) => handleInputChange("inNeedOf", e.target.value)}
                    placeholder="e.g., Carpenter"
                    className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                    Number of Workers Needed
                  </label>
                  <Input
                    type="text"
                    value={formData.count}
                    onChange={(e) => handleInputChange("count", e.target.value)}
                    placeholder="e.g., 10"
                    className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                    Time In
                  </label>
                  <Input
                    type="text"
                    value={formData.timeIn}
                    onChange={(e) => handleInputChange("timeIn", e.target.value)}
                    placeholder="e.g., 9:00 AM"
                    className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                    Time Out
                  </label>
                  <Input
                    type="text"
                    value={formData.timeOut}
                    onChange={(e) => handleInputChange("timeOut", e.target.value)}
                    placeholder="e.g., 5:00 PM"
                    className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                    Salary Per Day
                  </label>
                  <Input
                    type="text"
                    value={formData.salary}
                    onChange={(e) => handleInputChange("salary", e.target.value)}
                    placeholder="e.g., ₱850.00"
                    className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                    Total Work Days
                  </label>
                  <Input
                    type="text"
                    value={formData.workDays}
                    onChange={(e) => handleInputChange("workDays", e.target.value)}
                    placeholder="e.g., 14"
                    className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>

                <div>
                  <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                    Location
                  </label>
                  <Input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="e.g., Rizal St, Laguna Province"
                    className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-4">
                <Button
                  onClick={() => setShowCreateForm(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-black rounded-lg h-[44px] px-8 [font-family:'Jost',Helvetica] font-semibold text-base"
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleCreateListing}
                  className="bg-green-500 hover:bg-green-600 text-white rounded-lg h-[44px] px-8 [font-family:'Jost',Helvetica] font-semibold text-base"
                >
                  Create Listing
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
