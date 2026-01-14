import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Card, CardContent } from "../../../components/ui/card";
import { useState } from "react";

interface WorkerProfileProps {
  onClose: () => void;
}

export const WorkerProfile = ({ onClose }: WorkerProfileProps): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: "John",
    middleInitial: "M",
    lastName: "Doe",
    dateOfBirth: "01/15/1990",
    gender: "Male",
    email: "john@example.com",
    mobileNumber: "555-1234",
    emailAddress: "john@example.com",
    password: "••••••••",
    skills: "Steel Working, Welding, Construction",
    experience: "5+ years",
    certifications: "OSHA Safety Certification",
    availability: "Full Time",
    preferredWages: "$60-80/hr",
    workLocation: "Within 25km",
    language: "English, Spanish",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Profile saved:", formData);
    onClose();
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="[font-family:'Jost',Helvetica] font-bold text-black text-4xl">
          Edit Profile
        </h1>
        <Button
          onClick={onClose}
          className="bg-white hover:bg-gray-100 text-black rounded-lg h-[44px] px-6 [font-family:'Jost',Helvetica] font-semibold text-base"
        >
          Cancel
        </Button>
      </div>

      <Card className="bg-white border-none rounded-[20px] shadow-[0px_4px_12px_#00000020]">
        <CardContent className="p-8">
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                First Name
              </label>
              <Input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                M.I.
              </label>
              <Input
                type="text"
                value={formData.middleInitial}
                onChange={(e) => handleChange("middleInitial", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                Last Name
              </label>
              <Input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                Date of Birth
              </label>
              <Input
                type="text"
                value={formData.dateOfBirth}
                onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                Gender
              </label>
              <Input
                type="text"
                value={formData.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <h3 className="[font-family:'Jost',Helvetica] font-bold text-black text-lg mb-4">
            Contact Information
          </h3>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                Email Address
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                Mobile Number
              </label>
              <Input
                type="text"
                value={formData.mobileNumber}
                onChange={(e) => handleChange("mobileNumber", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <h3 className="[font-family:'Jost',Helvetica] font-bold text-black text-lg mb-4">
            Work & Skill (Checkbox)
          </h3>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                Skills
              </label>
              <Input
                type="text"
                value={formData.skills}
                onChange={(e) => handleChange("skills", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                Experience
              </label>
              <Input
                type="text"
                value={formData.experience}
                onChange={(e) => handleChange("experience", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                Certifications
              </label>
              <Input
                type="text"
                value={formData.certifications}
                onChange={(e) => handleChange("certifications", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                Availability & Location
              </label>
              <Input
                type="text"
                value={formData.availability}
                onChange={(e) => handleChange("availability", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                Preferred Wage Location: Willing to travel (5) KM
              </label>
              <Input
                type="text"
                value={formData.preferredWages}
                onChange={(e) => handleChange("preferredWages", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <div>
              <label className="block [font-family:'Jost',Helvetica] font-semibold text-black text-sm mb-2">
                Expected Salary
              </label>
              <Input
                type="text"
                value={formData.workLocation}
                onChange={(e) => handleChange("workLocation", e.target.value)}
                className="w-full h-[44px] bg-gray-100 rounded-lg px-4 [font-family:'Jost',Helvetica] font-normal text-black border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white rounded-lg h-[44px] px-8 [font-family:'Jost',Helvetica] font-semibold text-base"
            >
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
